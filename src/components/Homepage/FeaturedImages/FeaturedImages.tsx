import "./FeaturedImages.css"
import { useEffect, useState } from "react";
import { AnyAction } from "redux";
import { connect } from "react-redux";

import { loadFeaturedImages } from "../../../redux/actions/filteredImageActions"
import { AppState } from "../../../redux";
import { ThunkDispatch } from "redux-thunk";

interface FeaturedImagesProps {
    //Place any props that are passed to this component from outside here.
}

type Props = FeaturedImagesProps & LinkStateProps & LinkDispatchProps;

const FeaturedImages = ({ loadFeaturedImages, featuredImages }: Props) => {


    const [images, imagesSet] = useState<Array<string>>();

    useEffect(() => {
        loadFeaturedImages();
    }, [loadFeaturedImages]);

    useEffect(() => {
        if (featuredImages) setRequiredImagesToState(featuredImages);
    }, [featuredImages])

    const setRequiredImagesToState = (images: Array<FeatureImage>): void => {
        // Only take the first 12 items
        // This page only needs 12 images
        images = images.slice(0, 12);
        imagesSet(images.map(image => (image.src.landscape)));
    }

    return (
        <div className="featured-pics">
            <span className="header">Featured images</span>
            <div className="image-grid">
                <div className="image-area">
                    {/* Display first 6 images in a normal way */}
                    {
                        images &&
                        images.slice(0, 6).map(image => (
                            <img className="featured-pic" src={image} alt="Gallery" />
                        ))
                    }
                    {/* Display the next 6 images with class that prevents them from showing on mobile*/}

                    {
                        images &&
                        images.slice(6).map(image => (
                            <img className="featured-pic extra" src={image} alt="Gallery" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}



// Interface for the return of mapStateToProps
interface LinkStateProps {
    featuredImages: FeaturedImages["photos"];
}

// Interface for the return of MapDispatchToProps
interface LinkDispatchProps {
    loadFeaturedImages: () => void;
}

// The function takes the state and the props
// Returns items that follow the LinkStateProps interface
const mapStateToProps = (
    state: AppState,
    ownProps: FeaturedImagesProps
): LinkStateProps => ({
    featuredImages: state.featuredImages.photos
});

// The function takes the dispatch ability and the props
// Returns items that follow the LinkDispatchProps interface
const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    ownProps: FeaturedImagesProps
): LinkDispatchProps => ({
    loadFeaturedImages: () => dispatch(loadFeaturedImages())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeaturedImages);
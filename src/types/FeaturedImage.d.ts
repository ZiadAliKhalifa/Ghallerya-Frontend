type FeaturedImages = {
    page: number | null;
    per_page: number | null;
    photos?: (FeatureImage)[] | null;
    total_results: number | null;
    next_page: string | null;
}

interface FeatureImage {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string;
    src: ImageSizes;
    liked: boolean;
}
interface ImageSizes {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
}

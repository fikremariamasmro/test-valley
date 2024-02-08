export interface IProduct {
    id: number;
    type: string;
    code: string;
    title: string;
    subtitle: string;
    description: string;
    trialPeriod: null | string;
    installmentPrice: null | number;
    installmentPeriod: null | string;
    rating: number;
    startDate: null | string;
    endDate: null | string;
    viewType: null | string;
    createdAt: string;
    items: any[];
    media: IMediaItem[];
    thumbnail: IMediaItem;
    taggings: any[];
    singleCollections: any[];
}

export interface IMediaItem {
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
    uuid: string;
    mimeType: string;
    uri: string;
    fileName: string;
    objectKey: string;
    deviceType: null | string;
    collectionId: number;
    seq: number;
    itemKey: null | string;
    type: string;
}


export interface ISliderController {
    infinite: boolean,
    slidesToShow: number,
    slidesToScroll: number,
    autoplay: boolean,
    autoplaySpeed: number
}

export type IProductList = IProduct[];

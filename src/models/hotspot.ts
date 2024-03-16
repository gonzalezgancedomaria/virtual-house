export interface SceneHotspot{
    id?: string,
    pitch?: number,
    yaw?: number,
    text?: string,
    type?: string,
    sceneId: string,
    targetYaw?: number,
    targetPitch?: number,
    cssClass?: string,

    // PQC para typescript
    createTooltipFunc?: any,
    createTooltipArgs?: TooltipArgs
}

export interface InfoHotspot {
    id?: string,
    pitch?: number,
    yaw?: number,
    text?: string,
    type?: string,
    URL: string,
    cssClass?: string,

    // PQC para typescript
    createTooltipFunc?: any,
    createTooltipArgs?: any,
}



export interface CustomImage{
    src: string,
    alt?: string,
    width?: number,
    height?: number,
}

export interface HotspotModal{
    title?: string,
    description?: string,
    imagen?: CustomImage,
}

interface TooltipArgs{
    title?: string,
    id?: string,
    customIcon?: CustomImage,
    modal?: HotspotModal,
}

export interface CustomHotspot{
    id?: string,
    pitch?: number,
    yaw?: number,
    text?: string
    cssClass?: string
    createTooltipFunc?: any,
    createTooltipArgs?: TooltipArgs

}
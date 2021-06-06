/*global cordova,window,console*/
/**
 * An Image Picker plugin for Cordova
 *
 * Developed by Wymsee for Sync OnSet
 */

interface Window {
    imagePicker: ImagePicker;
}

declare enum OutputType {
    FILE_URI = 0,
    BASE64_STRING = 1,
}

interface ImagePicker {
    /**
     * Takes a photo using the camera, or retrieves a photo from the device's image gallery.
     * @param onSuccess Success callback, that get the image array
     * as a base64-encoded String, or as the URI for the image file.
     * @param onError Error callback, that get an error message.
     * @param options Optional parameters to customize the camera settings.
     */
    getPictures(
        onSuccess: (images: string[]) => void,
        onError: (message: string) => void,
        options?: ImagePickerOptions): void;
}

interface ImagePickerOptions {
    /** Maximum number of images that can be selected. Default is 15 */
    maximumImagesCount?: number;
    /**
     * Width in pixels to scale image. Must be used with targetHeight.
     * Aspect ratio remains constant.
    */
    width?: number;
    /**
     * Height in pixels to scale image. Must be used with targetWidth.
     * Aspect ratio remains constant.
     */
    height?: number;
    /** Picture quality in range 0-100. Default is 100 */
    quality?: number;
    /** Whether to display the video file. Default is false */
    allow_video?: boolean;
    title?: string;
    message?: string;
    /**
     * Choose the format of the return value.
     * Default is FILE_URI.
     *      FILE_URI : 0,   Return image file URI
     *      BASE64_STRING : 1,   Return image as base64-encoded string
     */
    outputType?: OutputType;
    /** iOS-only options that specify popover location in iPad. Defined in CameraPopoverOptions. */
    disable_popover?: boolean;
}


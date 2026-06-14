import { UploadApiResponse } from "cloudinary";
import cloudinary from "../config/cloudinary"
import { Readable } from "stream";

export const uploadToCloudinary = (
    buffer: Buffer,
    folder = "realnest"
): Promise<UploadApiResponse> => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder,
            },
            (error, result) => {
                if (error) {
                    return reject(error);
                }

                if (!result) {
                    return reject(new Error("Upload failed"));
                }

                resolve(result);
            }
        );

        Readable.from(buffer).pipe(uploadStream);
    });
};
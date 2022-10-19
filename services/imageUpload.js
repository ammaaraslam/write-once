import nhost from "../utils/nhost";

export default async function imageUpload(image) {
  await nhost.storage.upload({ file: image, bucketId: "coverImages" });
}

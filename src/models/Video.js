import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  videoUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  hashtags: [{ type: String, required: true }],
  createdAt: { type: Date, required: true, default: Date.now },
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((item) => (item.startsWith("#") ? item : `#${item.trim()}`));
});

const videoModel = mongoose.model("Video", videoSchema);

export default videoModel;

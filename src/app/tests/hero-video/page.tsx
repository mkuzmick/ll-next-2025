import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function HeroVideoDialogDemo() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-100px)] min-w-[calc(100vw-100px)] p-12">
      <HeroVideoDialog
        className="block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/VWUlEaAJNzk?si=Ul7ri1CZy0mKIlVt"
        thumbnailSrc="https://files.slack.com/files-pri/T0HTW3H0V-F08C771N4DS/screenrecording2025-02-06at12.24.01pm-ezgif.com-video-to-gif-converter.gif?pub_secret=f036c4e7ae"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}

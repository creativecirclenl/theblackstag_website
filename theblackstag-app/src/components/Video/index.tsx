export default function Video({ video }: { video: string }) {
  return (
    <div className="container">
      <video controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

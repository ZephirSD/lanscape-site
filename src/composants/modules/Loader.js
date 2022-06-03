import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  console.log(progress);
  return (
    <>
      <Html fullscreen>
        <section className="loader-section">
          <div className="circle-loader">
            <h3 className="ecrito-loader">{Math.round(progress)} %</h3>
          </div>
        </section>
      </Html>
    </>
  );
}

export default Loader;

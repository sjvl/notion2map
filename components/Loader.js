
function Loader() {
  return (
    <svg style={{margin: 'auto', background: 'transparent', display: 'block', shapRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100">
        <circle cx="50" cy="23" r="13" fill="#e15b64">
        <animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23"></animate>
        </circle>
    </svg>
  );
}
export default Loader;

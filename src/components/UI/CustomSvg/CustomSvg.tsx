const CustomSVG = ({
  paths,
  width,
  height,
  className,
  viewBox,
  style,
}: any) => {
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox={viewBox ? viewBox : `0 0 ${width} ${height}`}
    >
      {paths.map((path: any, index: number) => (
        <path key={index} d={path} />
      ))}
    </svg>
  );
};

export default CustomSVG;

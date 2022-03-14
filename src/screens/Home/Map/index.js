import MapView from "react-native-maps";
import PropTypes from "prop-types";

const Map = ({
  style,
  children,
  initialRegion,
  region,
  onRegionChange,
  ...props
}) => {
  return (
    <MapView
      {...props}
      style={style}
      initialRegion={initialRegion}
      region={region}
      onRegionChange={onRegionChange}
    >
      {children}
    </MapView>
  );
};

Map.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
  initialRegion: PropTypes.object,
  region: PropTypes.object,
  onRegionChange: PropTypes.func,
};

export default Map;

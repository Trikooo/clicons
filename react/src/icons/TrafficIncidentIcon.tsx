import React from 'react';
import config from '../config';

interface TrafficIncidentIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TrafficIncidentIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/traffic-incident)
 * @see {@link https://clicons.dev/icon/traffic-incident}
 */
const TrafficIncidentIcon = React.forwardRef<SVGSVGElement, TrafficIncidentIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 1.99774H21'
    }
  ],
  [
    'path',
    {
      d: 'M10.7065 21.4604L10.7642 20.3555M10.7642 20.3555C11.0614 20.4324 11.5801 20.5692 11.8475 20.7111C14.1849 21.9509 14.724 22.3959 15.6596 21.6114L19.6081 17.7113C20.4039 16.7857 19.9641 16.2425 18.7478 13.8954C18.6087 13.6268 18.4423 13.142 18.3685 12.8444M10.7642 20.3555C9.6351 20.0633 8.61165 20.1531 7.91851 19.6217C7.80514 19.5348 6.70763 18.3994 5.90132 17.5855C5.29549 16.974 5.90619 16.4078 6.43603 15.7903C6.77273 15.3979 7.07438 14.969 7.43859 14.6019C9.4572 12.5671 10.8034 11.2332 12.8421 9.26272C13.2363 8.88166 13.7016 8.56633 14.1228 8.21523C14.5986 7.8187 15.1062 7.41457 15.6824 7.92444C16.5414 8.68456 17.6138 9.84647 17.6996 9.9606C18.2242 10.6584 18.0881 11.7139 18.3685 12.8444M10.7642 20.3555L18.3685 12.8444M18.3685 12.8444L19.4853 12.7076M8.02515 19.697L8.98808 18.466M10.9943 14.5029L12.7186 12.8895M16.506 10.9665L17.9194 10.3567M12.6945 9.36458L11.8555 8.48576C11.4739 8.08602 11.4897 7.4529 11.8908 7.07267L12.6923 6.31294C13.0846 5.94099 13.7021 5.94809 14.0858 6.32896L15.529 7.76154M7.40395 14.7194L6.53456 13.8706C6.13911 13.4845 5.50489 13.4922 5.11903 13.8879L4.34804 14.6784C3.97057 15.0654 3.96983 15.682 4.34637 16.0699L5.76263 17.5291'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

TrafficIncidentIcon.displayName = 'TrafficIncidentIcon';
export default TrafficIncidentIcon;

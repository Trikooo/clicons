import React from 'react';
import config from '../config';

interface PointingLeft6IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PointingLeft6Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pointing-left6)
 * @see {@link https://clicons.dev/icon/pointing-left6}
 */
const PointingLeft6Icon = React.forwardRef<SVGSVGElement, PointingLeft6IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M1.99994 4.50012H7.9981M1.99994 4.50012C1.99994 3.79989 3.99363 2.49165 4.49917 2.00012M1.99994 4.50012C1.99994 5.20035 3.99363 6.50859 4.49917 7.00012'
    }
  ],
  [
    'path',
    {
      d: 'M11.0746 13.0053H7.97205M7.97205 13.0053H3.50404C2.67335 13.0053 1.99994 12.3329 1.99994 11.5035C1.99994 10.6741 2.67335 10.0017 3.50404 10.0017L8.96681 10.0017M7.97205 13.0053L7.9989 14.0596C8.01701 14.7707 8.40517 15.3872 8.97657 15.7276M8.96681 10.0017L13.5283 10.0017M8.96681 10.0017L11.7258 7.40828C13.5928 5.83582 14.9538 6.66214 15.71 7.24239L19.6826 10.1228C20.0238 10.3702 20.4345 10.5035 20.856 10.5035H21.9887M11.0051 16.0088H10.0014C9.62726 16.0088 9.27665 15.9063 8.97657 15.7276M8.97657 15.7276L9.03126 17.0632C9.04843 17.7374 9.39835 18.3267 9.92172 18.6761M12.0375 19.0123H11.0337C10.6228 19.0123 10.2401 18.8886 9.92172 18.6761M9.92172 18.6761L10.1906 20.267C10.3256 21.2662 11.1844 22.0089 12.1943 21.9996H15.7425C16.3462 21.9996 16.9526 21.9511 17.5262 21.7624C18.0038 21.6053 18.5296 21.385 18.873 21.1151C19.6139 20.5328 19.8764 20.1257 20.5114 20.0199C21.0195 19.9352 21.6567 19.9233 22.0005 19.9233'
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

PointingLeft6Icon.displayName = 'PointingLeft6Icon';
export default PointingLeft6Icon;

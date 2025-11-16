import React from 'react';
import config from '../config';

interface BackwardIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BackwardIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/backward)
 * @see {@link https://clicons.dev/icon/backward}
 */
const BackwardIcon = React.forwardRef<SVGSVGElement, BackwardIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.06492 12.6258C4.31931 13.8374 5.67295 14.7077 8.38024 16.4481C11.3247 18.3411 12.797 19.2876 13.9895 18.9229C14.3934 18.7994 14.7654 18.5823 15.0777 18.2876C16 17.4178 16 15.6118 16 12C16 8.38816 16 6.58224 15.0777 5.71235C14.7654 5.41773 14.3934 5.20057 13.9895 5.07707C12.797 4.71243 11.3247 5.6589 8.38024 7.55186C5.67295 9.29233 4.31931 10.1626 4.06492 11.3742C3.97836 11.7865 3.97836 12.2135 4.06492 12.6258Z'
    }
  ],
  [
    'path',
    {
      d: 'M20 5V19'
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

BackwardIcon.displayName = 'BackwardIcon';
export default BackwardIcon;

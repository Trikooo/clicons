import React from 'react';
import config from '../config';

interface ForwardIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ForwardIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/forward)
 * @see {@link https://clicons.dev/icon/forward}
 */
const ForwardIcon = React.forwardRef<SVGSVGElement, ForwardIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.9351 12.6258C19.6807 13.8374 18.327 14.7077 15.6198 16.4481C12.6753 18.3411 11.203 19.2876 10.0105 18.9229C9.60662 18.7994 9.23463 18.5823 8.92227 18.2876C8 17.4178 8 15.6118 8 12C8 8.38816 8 6.58224 8.92227 5.71235C9.23463 5.41773 9.60662 5.20057 10.0105 5.07707C11.203 4.71243 12.6753 5.6589 15.6198 7.55186C18.327 9.29233 19.6807 10.1626 19.9351 11.3742C20.0216 11.7865 20.0216 12.2135 19.9351 12.6258Z'
    }
  ],
  [
    'path',
    {
      d: 'M4 5L4 19'
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

ForwardIcon.displayName = 'ForwardIcon';
export default ForwardIcon;

import React from 'react';
import config from '../config';

interface Sink2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Sink2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sink2)
 * @see {@link https://clicons.dev/icon/sink2}
 */
const Sink2Icon = React.forwardRef<SVGSVGElement, Sink2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 17C15.7593 17 18.9168 14.4405 19.8036 10.9798C20.0098 10.175 20.1129 9.77257 19.8107 9.38629C19.5085 9 19.0187 9 18.039 9H5.96096C4.98134 9 4.49153 9 4.18931 9.38629C3.88709 9.77257 3.99019 10.175 4.19641 10.9798C5.08317 14.4405 8.24074 17 12 17Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 9V3.5C12 2.67157 12.6716 2 13.5 2C14.3284 2 15 2.67157 15 3.5'
    }
  ],
  [
    'path',
    {
      d: 'M9 9V8C9 7.05719 9 6.58579 8.70711 6.29289C8.41421 6 7.94281 6 7 6'
    }
  ],
  [
    'path',
    {
      d: 'M15 7V9'
    }
  ],
  [
    'path',
    {
      d: 'M9 16.5L9.64223 20.0323C9.84941 21.1717 10.8418 22 12 22C13.1582 22 14.1506 21.1717 14.3578 20.0323L15 16.5'
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

Sink2Icon.displayName = 'Sink2Icon';
export default Sink2Icon;

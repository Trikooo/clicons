import React from 'react';
import config from '../config';

interface SurfboardIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SurfboardIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/surfboard)
 * @see {@link https://clicons.dev/icon/surfboard}
 */
const SurfboardIcon = React.forwardRef<SVGSVGElement, SurfboardIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.0529 6.50695C13.3334 3.22644 18.3612 1.84155 20.939 2.01431C21.302 2.03865 21.4835 2.05081 21.7164 2.28365C21.9492 2.51648 21.9614 2.698 21.9857 3.06103C22.1585 5.63883 20.7736 10.6666 17.4931 13.9471C14.4457 16.9945 9.81522 19.8991 6.81046 21.6485C6.45729 21.8541 6.2807 21.9569 6.13279 21.985C5.71158 22.0647 5.28599 21.8201 5.143 21.4159C5.09278 21.274 5.09278 21.0656 5.09278 20.6488C5.09278 20.2524 5.09278 20.0541 5.05038 19.8912C4.93033 19.4299 4.57009 19.0697 4.10879 18.9496C3.94588 18.9072 3.74764 18.9072 3.35117 18.9072C2.9344 18.9072 2.72601 18.9072 2.58409 18.857C2.17994 18.714 1.93525 18.2884 2.01503 17.8672C2.04305 17.7193 2.14586 17.5427 2.35148 17.1895C4.10093 14.1848 7.00549 9.55434 10.0529 6.50695Z'
    }
  ],
  [
    'path',
    {
      d: 'M21 8C17.4091 14.1336 10.3975 8.45321 5.5 12.5'
    }
  ],
  [
    'path',
    {
      d: 'M7 17L8 16'
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

SurfboardIcon.displayName = 'SurfboardIcon';
export default SurfboardIcon;

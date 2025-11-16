import React from 'react';
import config from '../config';

interface Quran2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Quran2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/quran2)
 * @see {@link https://clicons.dev/icon/quran2}
 */
const Quran2Icon = React.forwardRef<SVGSVGElement, Quran2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.5 17H7C5.61929 17 4.5 18.1193 4.5 19.5C4.5 20.8807 5.61929 22 7 22H21.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.5 22C20.1193 22 19 20.8807 19 19.5C19 18.1193 20.1193 17 21.5 17'
    }
  ],
  [
    'path',
    {
      d: 'M14.1716 6.67157L13 5.5L11.8284 6.67157H10.1716V8.32843L9 9.5L10.1716 10.6716V12.3284H11.8284L13 13.5L14.1716 12.3284H15.8284V10.6716L17 9.5L15.8284 8.32843V6.67157H14.1716Z'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 19.5V5.5C4.5 3.567 6.067 2 8 2H18C19.933 2 21.5 3.567 21.5 5.5V17'
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

Quran2Icon.displayName = 'Quran2Icon';
export default Quran2Icon;

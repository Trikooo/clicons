import React from 'react';
import config from '../config';

interface PoopIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PoopIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/poop)
 * @see {@link https://clicons.dev/icon/poop}
 */
const PoopIcon = React.forwardRef<SVGSVGElement, PoopIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.2007 14C20.3305 14.8357 21 15.8744 21 17C21 19.7614 16.9706 22 12 22C7.02944 22 3 19.7614 3 17C3 15.8744 3.6695 14.8357 4.79934 14'
    }
  ],
  [
    'path',
    {
      d: 'M12.7585 8C11.2229 7.11636 9.9284 6.78583 8.89652 6.79725M8.89652 6.79725C7.009 6.81815 6 7.9832 6 9C6 10.6569 8.59363 12 11.793 12C14.9924 12 16.8707 10.4819 17.5861 9C19.0343 6 16.6206 2.5 11.3103 2C12.4367 3.36484 13.531 6.23506 8.89652 6.79725Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.0144 10C18.8351 10.7211 20 11.8265 20 13.0657C20 15.2386 16.4183 17 12 17C7.58172 17 4 15.2386 4 13.0657C4 11.9588 4.92955 10.9586 6.42571 10.2437'
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

PoopIcon.displayName = 'PoopIcon';
export default PoopIcon;

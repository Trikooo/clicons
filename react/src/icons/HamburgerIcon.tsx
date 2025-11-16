import React from 'react';
import config from '../config';

interface HamburgerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HamburgerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hamburger)
 * @see {@link https://clicons.dev/icon/hamburger}
 */
const HamburgerIcon = React.forwardRef<SVGSVGElement, HamburgerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.8541 4H9.14593C6.6503 4 4.52873 5.68344 3.75294 8.02892C3.49753 8.80111 3.36982 9.18721 3.69065 9.59361C4.01149 10 4.53377 10 5.57833 10H18.4217C19.4662 10 19.9885 10 20.3093 9.59361C20.6302 9.18721 20.5025 8.80111 20.2471 8.02892C19.4713 5.68344 17.3497 4 14.8541 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M4 16H3.5C2.67157 16 2 15.3284 2 14.5C2 13.6716 2.67157 13 3.5 13H11.3944C11.7893 13 12.1753 13.1169 12.5038 13.3359L14.4453 14.6302C14.7812 14.8541 15.2188 14.8541 15.5547 14.6302L17.4962 13.3359C17.8247 13.1169 18.2107 13 18.6056 13H20.5C21.3284 13 22 13.6716 22 14.5C22 15.3284 21.3284 16 20.5 16H20M4 16L4.4319 17.7276C4.76578 19.0631 5.96573 20 7.34233 20H16.6577C18.0343 20 19.2342 19.0631 19.5681 17.7276L20 16M4 16H11M20 16H18.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.0078 7L14.9988 7'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 6.5L9.5 7.5'
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

HamburgerIcon.displayName = 'HamburgerIcon';
export default HamburgerIcon;

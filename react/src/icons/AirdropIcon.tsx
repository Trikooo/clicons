import React from 'react';
import config from '../config';

interface AirdropIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AirdropIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/airdrop)
 * @see {@link https://clicons.dev/icon/airdrop}
 */
const AirdropIcon = React.forwardRef<SVGSVGElement, AirdropIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '12',
      cy: '11',
      r: '2'
    }
  ],
  [
    'path',
    {
      d: 'M4 17.001C2.74418 15.3295 2 13.2516 2 11C2 5.47715 6.47715 1 12 1C17.5228 1 22 5.47715 22 11C22 13.2516 21.2558 15.3295 20 17.001'
    }
  ],
  [
    'path',
    {
      d: 'M7.52779 15C6.57771 13.9385 6 12.5367 6 11C6 7.68629 8.68629 5 12 5C15.3137 5 18 7.68629 18 11C18 12.5367 17.4223 13.9385 16.4722 15'
    }
  ],
  [
    'path',
    {
      d: 'M9.95154 17.8759C10.7222 16.758 11.1076 16.199 11.6078 16.0553C11.8644 15.9816 12.1356 15.9816 12.3922 16.0553C12.8924 16.199 13.2778 16.758 14.0485 17.8759C15.074 19.3633 15.5867 20.1071 15.488 20.727C15.4379 21.0414 15.2938 21.3315 15.076 21.5565C14.6465 22 13.7643 22 12 22C10.2357 22 9.35352 22 8.92399 21.5565C8.70617 21.3315 8.56205 21.0414 8.512 20.727C8.4133 20.1071 8.92605 19.3633 9.95154 17.8759Z'
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

AirdropIcon.displayName = 'AirdropIcon';
export default AirdropIcon;

import React from 'react';
import config from '../config';

interface BurningCdIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BurningCdIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/burning-cd)
 * @see {@link https://clicons.dev/icon/burning-cd}
 */
const BurningCdIcon = React.forwardRef<SVGSVGElement, BurningCdIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15 16.5C15 18.8456 15 20.0184 14.3237 20.8263C14.1496 21.0343 13.9465 21.2205 13.7196 21.3801C12.8382 22 11.5588 22 9 22C6.44119 22 5.16178 22 4.28042 21.3801C4.05351 21.2205 3.85041 21.0343 3.6763 20.8263C3 20.0184 3 18.8456 3 16.5L3 7.5C3 5.15442 3 3.98164 3.6763 3.17372C3.85041 2.96572 4.05351 2.77954 4.28042 2.61994C5.16179 2 6.44119 2 9 2C11.5588 2 12.8382 2 13.7196 2.61994C13.9465 2.77954 14.1496 2.96572 14.3237 3.17372C15 3.98164 15 5.15443 15 7.5L15 16.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 13.5L12 10.5'
    }
  ],
  [
    'path',
    {
      d: 'M15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9'
    }
  ],
  [
    'path',
    {
      d: 'M15 19C18.866 19 22 15.866 22 12C22 8.13401 18.866 5 15 5'
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

BurningCdIcon.displayName = 'BurningCdIcon';
export default BurningCdIcon;

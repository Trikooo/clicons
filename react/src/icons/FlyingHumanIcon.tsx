import React from 'react';
import config from '../config';

interface FlyingHumanIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FlyingHumanIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/flying-human)
 * @see {@link https://clicons.dev/icon/flying-human}
 */
const FlyingHumanIcon = React.forwardRef<SVGSVGElement, FlyingHumanIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.9939 5.49805C15.9939 6.32648 15.322 6.99805 14.4931 6.99805C13.6641 6.99805 12.9922 6.32648 12.9922 5.49805C12.9922 4.66962 13.6641 3.99805 14.4931 3.99805C15.322 3.99805 15.9939 4.66962 15.9939 5.49805Z'
    }
  ],
  [
    'path',
    {
      d: 'M21 3C20.5 5 19.5 8 15 9C11.4857 9.78095 8.5 10 7 13'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 9.5C13.5 9.5 13 20.5 5 21M17 8.5C17 8.5 17.5 17 3 17'
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

FlyingHumanIcon.displayName = 'FlyingHumanIcon';
export default FlyingHumanIcon;

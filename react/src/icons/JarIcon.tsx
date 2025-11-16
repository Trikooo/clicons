import React from 'react';
import config from '../config';

interface JarIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name JarIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/jar)
 * @see {@link https://clicons.dev/icon/jar}
 */
const JarIcon = React.forwardRef<SVGSVGElement, JarIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.50474 2.07612V16C7.50474 18.8284 7.50474 20.2426 8.3848 21.1213C9.26487 22 10.6813 22 13.5142 22C16.3471 22 17.7635 22 18.6436 21.1213C19.5237 20.2426 19.5237 18.8284 19.5237 16V7.25C19.5237 6.29528 19.706 5.75727 20.2749 5C20.7183 4.40963 21.9177 3.25743 21.3507 2.43367C21.0523 2 20.2923 2 18.7725 2H10.5095C7.67658 2 6.26013 2 5.38007 2.87868C4.5 3.75736 4.5 5.17157 4.5 8V10'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 8H16.5M19.5 11.3333H16.5M19.5 14.6667H16.5M19 18H16.5'
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

JarIcon.displayName = 'JarIcon';
export default JarIcon;

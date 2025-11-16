import React from 'react';
import config from '../config';

interface SavingsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SavingsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/savings)
 * @see {@link https://clicons.dev/icon/savings}
 */
const SavingsIcon = React.forwardRef<SVGSVGElement, SavingsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5 13.5H3C2.44772 13.5 2 13.9477 2 14.5V21C2 21.5523 2.44772 22 3 22H5C5.55228 22 6 21.5523 6 21V14.5C6 13.9477 5.55228 13.5 5 13.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 14.5H11.75C12.4404 14.5 13 15.0596 13 15.75C13 16.4404 12.4404 17 11.75 17H9.5'
    }
  ],
  [
    'path',
    {
      d: 'M11 16.9998H14.6917C15.5417 16.9998 16.3697 16.729 17.0554 16.2267L19.6836 14.3015C20.2549 13.8584 21.0678 13.9088 21.5796 14.4192C22.1734 15.0112 22.1328 15.9828 21.4918 16.5236L17.0951 20.1022C16.3817 20.6828 15.49 20.9998 14.5701 20.9998H6'
    }
  ],
  [
    'path',
    {
      d: 'M19 7C19 9.76133 16.7614 12 14 12C11.2386 12 9 9.76133 9 7C9 4.23857 11.2386 2 14 2C16.7614 2 19 4.23857 19 7Z'
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

SavingsIcon.displayName = 'SavingsIcon';
export default SavingsIcon;

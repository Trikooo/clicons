import React from 'react';
import config from '../config';

interface ProgrammingFlagIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ProgrammingFlagIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/programming-flag)
 * @see {@link https://clicons.dev/icon/programming-flag}
 */
const ProgrammingFlagIcon = React.forwardRef<SVGSVGElement, ProgrammingFlagIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H15C17.8284 3 19.2426 3 20.1213 3.87868C21 4.75736 21 6.17157 21 9C21 11.8284 21 13.2426 20.1213 14.1213C19.2426 15 17.8284 15 15 15H4V7Z'
    }
  ],
  [
    'path',
    {
      d: 'M4 21L4 8'
    }
  ],
  [
    'path',
    {
      d: 'M16 7L17.2265 8.05719C17.7422 8.50163 18 8.72386 18 9C18 9.27614 17.7422 9.49836 17.2265 9.94281L16 11'
    }
  ],
  [
    'path',
    {
      d: 'M9 7L7.77346 8.05719C7.25782 8.50163 7 8.72386 7 9C7 9.27614 7.25782 9.49836 7.77346 9.94281L9 11'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 7L11.5 11'
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

ProgrammingFlagIcon.displayName = 'ProgrammingFlagIcon';
export default ProgrammingFlagIcon;

import React from 'react';
import config from '../config';

interface TextVerticalAlignmentIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TextVerticalAlignmentIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/text-vertical-alignment)
 * @see {@link https://clicons.dev/icon/text-vertical-alignment}
 */
const TextVerticalAlignmentIcon = React.forwardRef<SVGSVGElement, TextVerticalAlignmentIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13 4L22 4'
    }
  ],
  [
    'path',
    {
      d: 'M13 8L22 8'
    }
  ],
  [
    'path',
    {
      d: 'M2 12H22'
    }
  ],
  [
    'path',
    {
      d: 'M13 20L22 20'
    }
  ],
  [
    'path',
    {
      d: 'M13 16L22 16'
    }
  ],
  [
    'path',
    {
      d: 'M8 8.5L6.71429 5.5M6.71429 5.5L5.58623 2.86786C5.55491 2.7948 5.53926 2.75827 5.51945 2.72724C5.44354 2.60832 5.31395 2.527 5.16623 2.50559C5.12769 2.5 5.08512 2.5 5 2.5C4.91488 2.5 4.87231 2.5 4.83377 2.50559C4.68605 2.527 4.55646 2.60831 4.48055 2.72724C4.46074 2.75826 4.44509 2.7948 4.41377 2.86786L3.28571 5.5M6.71429 5.5L3.28571 5.5M3.28571 5.5L2 8.5'
    }
  ],
  [
    'path',
    {
      d: 'M8 21.5L6.71429 18.5M6.71429 18.5L5.58623 15.8679C5.55491 15.7948 5.53926 15.7583 5.51945 15.7272C5.44354 15.6083 5.31395 15.527 5.16623 15.5056C5.12769 15.5 5.08512 15.5 5 15.5C4.91488 15.5 4.87231 15.5 4.83377 15.5056C4.68605 15.527 4.55646 15.6083 4.48055 15.7272C4.46074 15.7583 4.44509 15.7948 4.41377 15.8679L3.28571 18.5M6.71429 18.5L3.28571 18.5M3.28571 18.5L2 21.5'
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

TextVerticalAlignmentIcon.displayName = 'TextVerticalAlignmentIcon';
export default TextVerticalAlignmentIcon;

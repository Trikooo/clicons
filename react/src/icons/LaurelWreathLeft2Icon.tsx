import React from 'react';
import config from '../config';

interface LaurelWreathLeft2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LaurelWreathLeft2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/laurel-wreath-left2)
 * @see {@link https://clicons.dev/icon/laurel-wreath-left2}
 */
const LaurelWreathLeft2Icon = React.forwardRef<SVGSVGElement, LaurelWreathLeft2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.24601 6.61105C9.03276 8.25332 10.35 9.77729 10.35 9.77729C10.35 9.77729 12.013 8.6386 12.2262 6.99633C12.4395 5.35405 11.1223 3.83008 11.1223 3.83008C11.1223 3.83008 9.45927 4.96877 9.24601 6.61105Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.68301 12.1301C8.37906 13.6334 10.3074 14.2234 10.3074 14.2234C10.3074 14.2234 11.1071 12.3759 10.4111 10.8726C9.71504 9.36923 7.78674 8.7793 7.78674 8.7793C7.78674 8.7793 6.98696 10.6267 7.68301 12.1301Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.8095 18.0136C11.8095 18.0136 9.83175 18.4083 8.50364 17.4151C7.17554 16.422 7 14.4172 7 14.4172C7 14.4172 8.97775 14.0226 10.3059 15.0157C11.634 16.0089 11.8095 18.0136 11.8095 18.0136ZM11.8095 18.0136H15.0077C16.1085 18.0136 17.0009 18.906 17.0009 20.0068C17.0009 21.1076 16.1085 22 15.0077 22H13.0009'
    }
  ],
  [
    'path',
    {
      d: 'M13.7813 2.96764C12.5708 4.10058 12.6174 6.11247 12.6174 6.11247C12.6174 6.11247 14.6267 6.28752 15.8372 5.15458C17.0477 4.02165 17.001 2.00975 17.001 2.00975C17.001 2.00975 14.9918 1.83471 13.7813 2.96764Z'
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

LaurelWreathLeft2Icon.displayName = 'LaurelWreathLeft2Icon';
export default LaurelWreathLeft2Icon;

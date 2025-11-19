import React from 'react';
import config from '../config';

interface AlignBottomIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AlignBottomIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/align-bottom)
 * @see {@link https://clicons.dev/icon/align-bottom}
 */
const AlignBottomIcon = React.forwardRef<SVGSVGElement, AlignBottomIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.502 10.0023C17.3458 10.0023 18.3198 9.91895 18.801 10.7523C19.002 11.1004 19.002 11.5677 19.002 12.5023V13.5023C19.002 14.4369 19.002 14.9042 18.801 15.2523C18.3198 16.0857 17.3458 16.0023 16.502 16.0023C15.6581 16.0023 14.6841 16.0857 14.2029 15.2523C14.002 14.9042 14.002 14.4369 14.002 13.5023L14.002 12.5023C14.002 11.5677 14.002 11.1004 14.2029 10.7523C14.6841 9.91895 15.6581 10.0023 16.502 10.0023Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.50195 4.00232C8.34585 4.00232 9.31984 3.91895 9.80099 4.75232C10.002 5.10039 10.002 5.5677 10.002 6.50232L10.002 13.5023C10.002 14.4369 10.002 14.9042 9.80099 15.2523C9.31984 16.0857 8.34585 16.0023 7.50195 16.0023C6.65806 16.0023 5.68406 16.0857 5.20292 15.2523C5.00195 14.9042 5.00195 14.4369 5.00195 13.5023L5.00195 6.50232C5.00195 5.5677 5.00195 5.10039 5.20292 4.75232C5.68406 3.91895 6.65806 4.00232 7.50195 4.00232Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 20L2 20'
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

AlignBottomIcon.displayName = 'AlignBottomIcon';
export default AlignBottomIcon;

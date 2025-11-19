import React from 'react';
import config from '../config';

interface AlignVerticalCenterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AlignVerticalCenterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/align-vertical-center)
 * @see {@link https://clicons.dev/icon/align-vertical-center}
 */
const AlignVerticalCenterIcon = React.forwardRef<SVGSVGElement, AlignVerticalCenterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.5 8.00232C17.3439 8.00232 18.3179 7.91895 18.799 8.75232C19 9.10039 19 9.5677 19 10.5023V13.5023C19 14.4369 19 14.9042 18.799 15.2523C18.3179 16.0857 17.3439 16.0023 16.5 16.0023C15.6561 16.0023 14.6821 16.0857 14.201 15.2523C14 14.9042 14 14.4369 14 13.5023L14 10.5023C14 9.5677 14 9.10039 14.201 8.75232C14.6821 7.91895 15.6561 8.00232 16.5 8.00232Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 4.00232C8.34389 4.00232 9.31789 3.91895 9.79904 4.75232C10 5.10039 10 5.5677 10 6.50232L10 17.5023C10 18.4369 10 18.9042 9.79904 19.2523C9.31789 20.0857 8.34389 20.0023 7.5 20.0023C6.65611 20.0023 5.68211 20.0857 5.20096 19.2523C5 18.9042 5 18.4369 5 17.5023L5 6.50232C5 5.5677 5 5.10039 5.20096 4.75232C5.68211 3.91895 6.65611 4.00232 7.5 4.00232Z'
    }
  ],
  [
    'path',
    {
      d: 'M5 12H2'
    }
  ],
  [
    'path',
    {
      d: 'M14 12L10 12'
    }
  ],
  [
    'path',
    {
      d: 'M22 12L19 12'
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

AlignVerticalCenterIcon.displayName = 'AlignVerticalCenterIcon';
export default AlignVerticalCenterIcon;

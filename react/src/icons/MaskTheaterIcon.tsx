import React from 'react';
import config from '../config';

interface MaskTheaterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MaskTheaterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mask-theater)
 * @see {@link https://clicons.dev/icon/mask-theater}
 */
const MaskTheaterIcon = React.forwardRef<SVGSVGElement, MaskTheaterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 5C15.0776 5 17.8526 4.27588 19.8097 3.11579C19.9349 3.04155 20.0772 3 20.2228 3C20.652 3 21 3.34797 21 3.77722V10C21 17 16.5 22 12 22C7.5 22 3 17 3 10V3.77722C3 3.34797 3.34797 3 3.77722 3C3.92281 3 4.06506 3.04155 4.1903 3.11579C6.14736 4.27588 8.92241 5 12 5Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 10C6.86849 9.69313 7.40399 9.5 8 9.5C8.59601 9.5 9.13151 9.69313 9.5 10'
    }
  ],
  [
    'path',
    {
      d: 'M12 15.7C13.192 15.7 14.263 15.4296 15 15C15 15 14.5 18 12 18C9.5 18 9 15 9 15C9.73698 15.4296 10.808 15.7 12 15.7Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 10C14.8685 9.69313 15.404 9.5 16 9.5C16.596 9.5 17.1315 9.69313 17.5 10'
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

MaskTheaterIcon.displayName = 'MaskTheaterIcon';
export default MaskTheaterIcon;

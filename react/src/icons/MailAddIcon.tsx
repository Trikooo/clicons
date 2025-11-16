import React from 'react';
import config from '../config';

interface MailAddIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MailAddIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mail-add)
 * @see {@link https://clicons.dev/icon/mail-add}
 */
const MailAddIcon = React.forwardRef<SVGSVGElement, MailAddIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 5.5L8.91302 9.42462C11.4387 10.8585 12.5613 10.8585 15.087 9.42462L22 5.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.5 20C11.5 20 10.0691 19.9878 9.09883 19.9634C5.95033 19.8843 4.37608 19.8448 3.24496 18.7094C2.11383 17.5739 2.08114 16.0412 2.01577 12.9756C1.99475 11.9899 1.99474 11.0101 2.01576 10.0244C2.08114 6.95885 2.11382 5.42608 3.24495 4.29065C4.37608 3.15521 5.95033 3.11566 9.09882 3.03656C11.0393 2.98781 12.9607 2.98781 14.9012 3.03657C18.0497 3.11568 19.6239 3.15523 20.7551 4.29066C21.8862 5.42609 21.9189 6.95886 21.9842 10.0244C21.9918 10.3812 21.9967 10.9995 21.9988 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M14 17H22M18 21L18 13'
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

MailAddIcon.displayName = 'MailAddIcon';
export default MailAddIcon;

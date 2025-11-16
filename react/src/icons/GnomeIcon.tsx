import React from 'react';
import config from '../config';

interface GnomeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GnomeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/gnome)
 * @see {@link https://clicons.dev/icon/gnome}
 */
const GnomeIcon = React.forwardRef<SVGSVGElement, GnomeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 12.5C14.5827 12.5 16.9032 12.8863 18.5 13.5C18.5 12.5201 18.2223 11.5603 17.699 10.7318L12.767 2.92274C12.6008 2.65958 12.3113 2.5 12 2.5C11.6887 2.5 11.3992 2.65958 11.233 2.92274L6.30099 10.7318C5.77773 11.5603 5.5 12.5201 5.5 13.5C7.09679 12.8863 9.41727 12.5 12 12.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 13C16 13 16.5 13.8 16.5 15C16.5 15 16.5 17 15 17C13.5 17 13.5 15.5 12 15.5C10.5 15.5 10.5 17 9 17C7.5 17 7.5 15 7.5 15C7.5 13.8 8 13 8 13'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 13.5C18.5 13.5 19 14.4 19 16C19 18 17.7385 19.1308 16 20C14.5895 20.7053 13.4277 21.6592 12.8653 22.1603C12.6263 22.3733 12.3201 22.5 12 22.5C11.6799 22.5 11.3737 22.3733 11.1347 22.1603C10.5723 21.6592 9.41051 20.7053 8 20C6.26155 19.1308 5 18 5 16C5 14.4 5.5 13.5 5.5 13.5'
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

GnomeIcon.displayName = 'GnomeIcon';
export default GnomeIcon;

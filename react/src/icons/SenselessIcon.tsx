import React from 'react';
import config from '../config';

interface SenselessIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SenselessIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/senseless)
 * @see {@link https://clicons.dev/icon/senseless}
 */
const SenselessIcon = React.forwardRef<SVGSVGElement, SenselessIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '12',
      cy: '12',
      r: '10'
    }
  ],
  [
    'path',
    {
      d: 'M8.00265 9.01879C8.00265 9.01879 8.25256 8.39617 7.62377 8.09123C6.5035 7.54795 5.03652 9.56203 6.86627 10.6732C8.75834 11.8222 10 9.69656 10 8.09123'
    }
  ],
  [
    'path',
    {
      d: 'M15.9974 9.98121C15.9974 9.98121 15.7474 10.6038 16.3762 10.9088C17.4965 11.452 18.9635 9.43797 17.1337 8.32683C15.2417 7.17784 14 9.30344 14 10.9088'
    }
  ],
  [
    'path',
    {
      d: 'M16 16.6L15.7307 16.4C15.0125 15.8667 14.1672 15.8667 13.4491 16.4L13.1798 16.6C12.4616 17.1333 11.6163 17.1333 10.8982 16.6L10.6288 16.4C9.91069 15.8667 9.06539 15.8667 8.34723 16.4L8 16.6579'
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

SenselessIcon.displayName = 'SenselessIcon';
export default SenselessIcon;

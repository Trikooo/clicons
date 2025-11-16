import React from 'react';
import config from '../config';

interface RiceBowlIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RiceBowlIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rice-bowl)
 * @see {@link https://clicons.dev/icon/rice-bowl}
 */
const RiceBowlIcon = React.forwardRef<SVGSVGElement, RiceBowlIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.91145 12H18.0886C19.6914 12 20.2786 12.3707 19.8787 13.9821C19.1733 16.8246 17.1759 17.5306 15.3304 19.3859C14.8819 19.8369 15.5798 20.5032 15.5802 20.9992C15.5809 21.933 14.6928 22 13.9854 22H8.0146C7.30717 22 6.41908 21.933 6.41982 20.9992C6.4202 20.5137 7.0972 19.8159 6.66957 19.3859C4.82407 17.5306 2.82674 16.8246 2.12128 13.9821C1.72136 12.3707 2.30857 12 3.91145 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 12C18.5 10.2089 16.6001 8.98823 15 9.69218M3.5 12C3.5 10.7067 4.46855 9.64127 5.7151 9.49889C4.90104 7.65834 6.62631 5.59405 8.53891 6.01716M16.292 9.48272C17.0733 7.68217 15.4185 5.58415 13.4611 6.01716C12.9848 3.32761 9.01516 3.32761 8.53891 6.01716M8.53891 6.01716C9.13252 6.14848 9.64708 6.49221 10 6.96519'
    }
  ],
  [
    'path',
    {
      d: 'M17 9L22 3'
    }
  ],
  [
    'path',
    {
      d: 'M16 6L18 2'
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

RiceBowlIcon.displayName = 'RiceBowlIcon';
export default RiceBowlIcon;

import React from 'react';
import config from '../config';

interface SunCloudFastWindIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SunCloudFastWindIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sun-cloud-fast-wind)
 * @see {@link https://clicons.dev/icon/sun-cloud-fast-wind}
 */
const SunCloudFastWindIcon = React.forwardRef<SVGSVGElement, SunCloudFastWindIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.00488 4.15468C8.3104 3.15451 7.15576 2.5 5.84876 2.5C3.72584 2.5 2.00488 4.22674 2.00488 6.35679C2.00488 7.65354 2.64271 8.80081 3.62076 9.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.1588 21.4146C14.3031 21.4699 14.4585 21.5 14.6203 21.5C15.385 21.5 16.0049 20.8284 16.0049 20C16.0049 19.1716 15.385 18.5 14.6203 18.5C14.3488 18.5 14.0956 18.5846 13.8819 18.7309C12.8207 19.5225 10.8549 20.5378 8.62023 20.801M5.85102 20.6936C5.2328 20.5635 4.61355 20.3541 4.00488 20.0478'
    }
  ],
  [
    'path',
    {
      d: 'M19.0049 20.5C19.263 20.5 19.9606 20.5 21.0049 20.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.4782 8.40196C17.4856 8.40192 17.4931 8.40191 17.5006 8.40191C19.9849 8.40191 21.8964 10.36 21.9983 12.6502C22.0763 15.7 19.4254 17.308 17.5062 17.248M17.4782 8.40196C17.493 8.24557 17.5006 8.08719 17.5006 7.92713C17.5006 4.96 15.0368 2.5 12.0005 2.5C9.06174 2.5 6.74504 4.77718 6.50324 7.44927M17.4782 8.40196C17.376 9.47916 17.0384 10.42 16.2347 11.356M6.50324 7.44927C3.96786 7.67846 2.12265 9.76 2.0027 12.1754C1.92473 14.5 3.54406 16.12 5.52323 16.9C9.18169 18.28 12.6602 17.104 13.8237 15.124C14.3155 14.104 13.7398 12.64 12.3604 12.37C11.5207 12.16 10.0813 12.7 9.99735 14.302M6.50324 7.44927C6.66101 7.43501 6.82091 7.42771 6.98262 7.42771C8.10796 7.42771 9.12172 7.72 10.0093 8.404'
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

SunCloudFastWindIcon.displayName = 'SunCloudFastWindIcon';
export default SunCloudFastWindIcon;

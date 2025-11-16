import React from 'react';
import config from '../config';

interface FlipPhoneIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FlipPhoneIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/flip-phone)
 * @see {@link https://clicons.dev/icon/flip-phone}
 */
const FlipPhoneIcon = React.forwardRef<SVGSVGElement, FlipPhoneIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.5 4H5.5V15.5C5.5 19.0899 8.41015 22 12 22C15.5899 22 18.5 19.0899 18.5 15.5V8C18.5 6.11438 18.5 5.17157 17.9142 4.58579C17.3284 4 16.3856 4 14.5 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M11 18H13'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 8.42857C8.5 8.02959 8.5 7.83009 8.55612 7.66972C8.65663 7.38247 8.88247 7.15663 9.16972 7.05612C9.33009 7 9.52959 7 9.92857 7H14.0714C14.4704 7 14.6699 7 14.8303 7.05612C15.1175 7.15663 15.3434 7.38247 15.4439 7.66972C15.5 7.83009 15.5 8.02959 15.5 8.42857V9C15.5 9.4645 15.5 9.69675 15.4692 9.89109C15.2998 10.9608 14.4608 11.7998 13.3911 11.9692C13.1968 12 12.4645 12 12 12C11.5355 12 10.8032 12 10.6089 11.9692C9.53918 11.7998 8.70021 10.9608 8.53078 9.89109C8.5 9.69675 8.5 9.4645 8.5 9V8.42857Z'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 4L5.5 2'
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

FlipPhoneIcon.displayName = 'FlipPhoneIcon';
export default FlipPhoneIcon;

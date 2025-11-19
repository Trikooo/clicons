import React from 'react';
import config from '../config';

interface ViberIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ViberIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/viber)
 * @see {@link https://clicons.dev/icon/viber}
 */
const ViberIcon = React.forwardRef<SVGSVGElement, ViberIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21 10.5C21 17 18 18.5 12 18.5C11.6569 18.5 11.3235 18.4951 11 18.4846L8.10355 21.3959C8.03727 21.4625 7.94716 21.5 7.85318 21.5C7.65812 21.5 7.5 21.3419 7.5 21.1468V18.026C4.5 17.1924 3 15.0962 3 10.5C3 4 6 2.5 12 2.5C18 2.5 21 4 21 10.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.774 13.8618C13.5452 14.2819 14.2396 14.5517 14.689 14.7047C15.0132 14.8151 15.3642 14.7181 15.6063 14.476L16.25 13.8323L14.5146 12.6753C14.3213 12.5465 14.0638 12.5719 13.8996 12.7362L12.774 13.8618ZM12.774 13.8618C12.0003 13.4403 11.1493 12.8673 10.391 12.109C9.63265 11.3507 9.05973 10.4997 8.6382 9.72601M8.6382 9.72601C8.21806 8.95482 7.94831 8.26038 7.79531 7.81097C7.68495 7.48683 7.78191 7.1358 8.02404 6.89367L8.66771 6.25L9.82466 7.98543C9.95354 8.17874 9.92805 8.43615 9.76376 8.60044L8.6382 9.72601ZM8.32306 7.28395L9.01236 8.66255M15.2161 14.1769L13.8375 13.4876'
    }
  ],
  [
    'path',
    {
      d: 'M14 9.5C14 8.94772 13.5523 8.5 13 8.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 9.5C15.5 8.11929 14.3807 7 13 7'
    }
  ],
  [
    'path',
    {
      d: 'M17 9.5C17 7.29086 15.2091 5.5 13 5.5'
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

ViberIcon.displayName = 'ViberIcon';
export default ViberIcon;

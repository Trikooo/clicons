import React from 'react';
import config from '../config';

interface ZakatIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ZakatIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/zakat)
 * @see {@link https://clicons.dev/icon/zakat}
 */
const ZakatIcon = React.forwardRef<SVGSVGElement, ZakatIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.4682 10.3551C19.1036 8.33276 17.9684 6.82687 16.9816 5.94236C16.6945 5.68497 16.5509 5.55628 16.2338 5.43717C15.9166 5.31807 15.644 5.31807 15.0988 5.31807H13.9012C13.356 5.31807 13.0834 5.31807 12.7662 5.43717C12.4491 5.55628 12.3055 5.68497 12.0184 5.94236C11.0316 6.82687 9.89645 8.33276 9.53182 10.3551C9.26052 11.8597 10.7663 13 12.4491 13H16.5509C18.2337 13 19.7395 11.8597 19.4682 10.3551Z'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 14H6.89482C7.18897 14 7.47908 14.0663 7.74217 14.1936L9.78415 15.1816C10.0472 15.3089 10.3373 15.3751 10.6315 15.3751H11.6741C12.6825 15.3751 13.5 16.1662 13.5 17.142C13.5 17.1814 13.473 17.2161 13.4338 17.2269L10.8929 17.9295C10.4371 18.0555 9.949 18.0116 9.525 17.8064L7.34211 16.7503M13.5 16.5L18.0928 15.0889C18.907 14.8352 19.7871 15.136 20.2971 15.8423C20.6659 16.3529 20.5157 17.0842 19.9785 17.3942L12.4629 21.7305C11.9849 22.0063 11.4209 22.0736 10.8952 21.9176L4.5 20.0199'
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

ZakatIcon.displayName = 'ZakatIcon';
export default ZakatIcon;

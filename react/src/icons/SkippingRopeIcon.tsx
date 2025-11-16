import React from 'react';
import config from '../config';

interface SkippingRopeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SkippingRopeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/skipping-rope)
 * @see {@link https://clicons.dev/icon/skipping-rope}
 */
const SkippingRopeIcon = React.forwardRef<SVGSVGElement, SkippingRopeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.99414 5.51768C7.99414 7.44857 9.78763 9.01387 12 9.01387C14.2124 9.01387 16.0058 7.44857 16.0058 5.51768C16.0058 3.58678 14.2124 2.02148 12 2.02148C9.78763 2.02148 7.99414 3.58678 7.99414 5.51768Z'
    }
  ],
  [
    'path',
    {
      d: 'M4.51026 12.0001C3.66411 12.0172 2.86428 12.2077 2.59603 12.4307C2.28753 12.8966 2.98897 13.9351 3.09659 14.3722L2.74329 17.2346L2.50384 19.7476C2.35862 22.4164 6.3772 23.0706 6.49172 19.7476L5.87926 14.4271C6.14559 13.6302 6.78891 12.5758 6.31849 12.3294C5.83405 12.0756 5.15856 11.9869 4.51026 12.0001ZM4.51026 12.0001C4.46247 10.8024 4.3938 8.29973 4.78373 7.50793'
    }
  ],
  [
    'path',
    {
      d: 'M19.4897 12C20.3359 12.0171 21.1357 12.2076 21.404 12.4306C21.7125 12.8966 21.011 13.935 20.9034 14.3721L21.2567 17.2345L21.4962 19.7476C21.6414 22.4163 17.6228 23.0705 17.5083 19.7476L18.1207 14.427C17.8544 13.6301 17.2111 12.5758 17.6815 12.3293C18.166 12.0755 18.8414 11.9869 19.4897 12ZM19.4897 12C19.5291 11.014 19.5879 9.27148 19.3855 8.13919C19.3088 7.70989 19.1796 7.29042 19.0346 6.87912C17.5293 2.60859 10.8114 -0.613747 6.01109 4.98876'
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

SkippingRopeIcon.displayName = 'SkippingRopeIcon';
export default SkippingRopeIcon;

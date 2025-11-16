import React from 'react';
import config from '../config';

interface MagicWand4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MagicWand4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/magic-wand4)
 * @see {@link https://clicons.dev/icon/magic-wand4}
 */
const MagicWand4Icon = React.forwardRef<SVGSVGElement, MagicWand4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.9381 11.0774L3.41101 18.6045C2.863 19.1525 2.863 20.041 3.41101 20.589C3.95902 21.137 4.84752 21.137 5.39553 20.589L12.9226 13.0619M10.9381 11.0774L12.9226 13.0619M10.9381 11.0774L11.6823 10.3332M12.9226 13.0619L13.6668 12.3177M11.6823 10.3332L11.7248 10.2906C12.1124 9.90313 12.7406 9.90313 13.1281 10.2906L13.7094 10.8719C14.0969 11.2594 14.0969 11.8876 13.7094 12.2751L13.6668 12.3177M11.6823 10.3332L13.6668 12.3177'
    }
  ],
  [
    'path',
    {
      d: 'M18.2377 3.16707C18.3416 2.94431 18.6584 2.94431 18.7623 3.16707L19.1541 4.00647C19.3266 4.37618 19.6238 4.67336 19.9935 4.84591L20.8329 5.23766C21.0557 5.34162 21.0557 5.65838 20.8329 5.76234L19.9935 6.15409C19.6238 6.32664 19.3266 6.62381 19.1541 6.99353L18.7623 7.83293C18.6584 8.05569 18.3416 8.05569 18.2377 7.83293L17.8459 6.99353C17.6734 6.62381 17.3762 6.32664 17.0065 6.15409L16.1671 5.76234C15.9443 5.65838 15.9443 5.34162 16.1671 5.23766L17.0065 4.84591C17.3762 4.67336 17.6734 4.37618 17.8459 4.00647L18.2377 3.16707Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.2377 14.1671C18.3416 13.9443 18.6584 13.9443 18.7623 14.1671L19.1541 15.0065C19.3266 15.3762 19.6238 15.6734 19.9935 15.8459L20.8329 16.2377C21.0557 16.3416 21.0557 16.6584 20.8329 16.7623L19.9935 17.1541C19.6238 17.3266 19.3266 17.6238 19.1541 17.9935L18.7623 18.8329C18.6584 19.0557 18.3416 19.0557 18.2377 18.8329L17.8459 17.9935C17.6734 17.6238 17.3762 17.3266 17.0065 17.1541L16.1671 16.7623C15.9443 16.6584 15.9443 16.3416 16.1671 16.2377L17.0065 15.8459C17.3762 15.6734 17.6734 15.3762 17.8459 15.0065L18.2377 14.1671Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.23766 3.16707C7.34162 2.94431 7.65838 2.94431 7.76234 3.16707L8.15409 4.00647C8.32664 4.37618 8.62381 4.67336 8.99353 4.84591L9.83293 5.23766C10.0557 5.34162 10.0557 5.65838 9.83293 5.76234L8.99353 6.15409C8.62381 6.32664 8.32664 6.62381 8.15409 6.99353L7.76234 7.83293C7.65838 8.05569 7.34162 8.05569 7.23766 7.83293L6.84591 6.99353C6.67336 6.62381 6.37618 6.32664 6.00647 6.15409L5.16707 5.76234C4.94431 5.65838 4.94431 5.34162 5.16707 5.23766L6.00647 4.84591C6.37618 4.67336 6.67336 4.37618 6.84591 4.00647L7.23766 3.16707Z'
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

MagicWand4Icon.displayName = 'MagicWand4Icon';
export default MagicWand4Icon;

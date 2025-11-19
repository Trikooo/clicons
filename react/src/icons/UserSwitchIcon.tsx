import React from 'react';
import config from '../config';

interface UserSwitchIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name UserSwitchIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/user-switch)
 * @see {@link https://clicons.dev/icon/user-switch}
 */
const UserSwitchIcon = React.forwardRef<SVGSVGElement, UserSwitchIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17 17C15.6193 17 14.5 15.8807 14.5 14.5C14.5 13.1193 15.6193 12 17 12C18.3807 12 19.5 13.1193 19.5 14.5C19.5 15.8807 18.3807 17 17 17ZM17 17C19.4853 17 21.5 19.0147 21.5 21.5M17 17C14.5147 17 12.5 19.0147 12.5 21.5'
    }
  ],
  [
    'path',
    {
      d: 'M7 7.5C5.61929 7.5 4.5 6.38071 4.5 5C4.5 3.61929 5.61929 2.5 7 2.5C8.38071 2.5 9.5 3.61929 9.5 5C9.5 6.38071 8.38071 7.5 7 7.5ZM7 7.5C9.48528 7.5 11.5 9.51472 11.5 12M7 7.5C4.51472 7.5 2.5 9.51472 2.5 12'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 15.5C3.5 18.2643 5.73571 20.5 8.5 20.5L8 18.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 8.5C18.5 5.73571 16.2643 3.5 13.5 3.5L14 5.5'
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

UserSwitchIcon.displayName = 'UserSwitchIcon';
export default UserSwitchIcon;

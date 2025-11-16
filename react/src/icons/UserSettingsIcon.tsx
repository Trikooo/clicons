import React from 'react';
import config from '../config';

interface UserSettingsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name UserSettingsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/user-settings)
 * @see {@link https://clicons.dev/icon/user-settings}
 */
const UserSettingsIcon = React.forwardRef<SVGSVGElement, UserSettingsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.5 7.5C14.5 4.73858 12.2614 2.5 9.5 2.5C6.73858 2.5 4.5 4.73858 4.5 7.5C4.5 10.2614 6.73858 12.5 9.5 12.5C12.2614 12.5 14.5 10.2614 14.5 7.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 19.5C2.5 15.634 5.63401 12.5 9.5 12.5C10.5736 12.5 11.5907 12.7417 12.5 13.1736'
    }
  ],
  [
    'path',
    {
      d: 'M18 20C18.9293 20 19.7402 19.493 20.171 18.7404M18 20C17.0707 20 16.2598 19.493 15.829 18.7404M18 20L18 21.5M18 15C18.9292 15 19.74 15.5069 20.1709 16.2593M18 15C17.0708 15 16.26 15.5069 15.8291 16.2593M18 15L18 13.5M21.5 15.4998L20.1709 16.2593M14.5 19.4998L15.829 18.7404M21.5 19.4998L20.171 18.7404M14.5 15.4998L15.8291 16.2593M20.1709 16.2593C20.3803 16.6249 20.5 17.0485 20.5 17.5C20.5 17.9514 20.3804 18.3749 20.171 18.7404M15.829 18.7404C15.6196 18.3749 15.5 17.9514 15.5 17.5C15.5 17.0485 15.6197 16.6249 15.8291 16.2593'
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

UserSettingsIcon.displayName = 'UserSettingsIcon';
export default UserSettingsIcon;

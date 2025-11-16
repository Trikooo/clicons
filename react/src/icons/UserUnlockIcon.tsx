import React from 'react';
import config from '../config';

interface UserUnlockIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name UserUnlockIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/user-unlock)
 * @see {@link https://clicons.dev/icon/user-unlock}
 */
const UserUnlockIcon = React.forwardRef<SVGSVGElement, UserUnlockIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.502 8C14.502 5.23858 12.2635 3 9.50204 3C6.74062 3 4.50204 5.23858 4.50204 8C4.50204 10.7614 6.74062 13 9.50204 13C12.2635 13 14.502 10.7614 14.502 8Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.2375 15.6747V14.2523C16.2375 13.2845 17.022 12.5 17.9898 12.5C18.4669 12.5 18.8995 12.6907 19.2155 13M16.307 21H19.693C20.6899 21 21.498 20.1934 21.498 19.1984V17.6947C21.498 16.6997 20.6899 15.8931 19.693 15.8931H16.307C15.3102 15.8931 14.502 16.6997 14.502 17.6947L14.502 19.1984C14.502 20.1934 15.3102 21 16.307 21Z'
    }
  ],
  [
    'path',
    {
      d: 'M2.50204 20C2.50204 16.134 5.63605 13 9.50204 13C10.9893 13 12.3682 13.4638 13.502 14.2547'
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

UserUnlockIcon.displayName = 'UserUnlockIcon';
export default UserUnlockIcon;

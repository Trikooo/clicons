import React from 'react';
import config from '../config';

interface UserIdVerificationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name UserIdVerificationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/user-id-verification)
 * @see {@link https://clicons.dev/icon/user-id-verification}
 */
const UserIdVerificationIcon = React.forwardRef<SVGSVGElement, UserIdVerificationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15 21.5001C16.3945 21.5001 17.0918 21.5001 17.6672 21.362C19.4955 20.923 20.9229 19.4956 21.3618 17.6673C21.5 17.0919 21.5 16.3946 21.5 15.0001M9 21.5001C7.60547 21.5001 6.90821 21.5001 6.33277 21.362C4.50453 20.923 3.07707 19.4956 2.63815 17.6673C2.5 17.0919 2.5 16.3946 2.5 15.0001M9 2.50012C7.60547 2.50012 6.90821 2.50012 6.33277 2.63827C4.50453 3.0772 3.07707 4.50465 2.63815 6.3329C2.5 6.90833 2.5 7.6056 2.5 9.00012M15 2.50012C16.3945 2.50012 17.0918 2.50012 17.6672 2.63827C19.4955 3.0772 20.9229 4.50465 21.3618 6.3329C21.5 6.90833 21.5 7.6056 21.5 9.00012'
    }
  ],
  [
    'path',
    {
      d: 'M15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5C13.6569 12.5 15 11.1569 15 9.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 17.5C17 14.7386 14.7614 12.5 12 12.5C9.23858 12.5 7 14.7386 7 17.5'
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

UserIdVerificationIcon.displayName = 'UserIdVerificationIcon';
export default UserIdVerificationIcon;

import React from 'react';
import config from '../config';

interface JoinRoundIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name JoinRoundIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/join-round)
 * @see {@link https://clicons.dev/icon/join-round}
 */
const JoinRoundIcon = React.forwardRef<SVGSVGElement, JoinRoundIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.9997 22H17.9997C19.8853 22 20.8281 22 21.4139 21.4142C21.9997 20.8284 21.9997 19.8856 21.9997 18V17C21.9997 15.1144 21.9997 14.1716 21.4139 13.5858C20.8281 13 19.8853 13 17.9997 13L14.9997 13C13.114 13 12.1712 13 11.5855 12.4142C10.9997 11.8284 10.9997 10.8856 10.9997 9V6C10.9997 4.11438 10.9997 3.17157 10.4139 2.58579C9.82809 2 8.88528 2 6.99966 2L5.99966 2C4.11405 2 3.17124 2 2.58545 2.58579C1.99966 3.17157 1.99966 4.11438 1.99966 6L1.99966 8C1.99966 14.5997 1.99967 17.8995 4.04992 19.9497C6.10017 22 9.4 22 15.9997 22Z'
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

JoinRoundIcon.displayName = 'JoinRoundIcon';
export default JoinRoundIcon;

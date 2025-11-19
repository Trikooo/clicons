import React from 'react';
import config from '../config';

interface VictoryFingerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name VictoryFingerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/victory-finger)
 * @see {@link https://clicons.dev/icon/victory-finger}
 */
const VictoryFingerIcon = React.forwardRef<SVGSVGElement, VictoryFingerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.51708 13.0007L7.96439 10.0432M7.96439 10.0432L6.84918 4.07572C6.67303 3.13311 7.28511 2.22346 8.22351 2.03325C9.17309 1.84078 10.0983 2.45694 10.2885 3.40846L11.5024 9.48123L12.7225 3.40846C12.9127 2.45694 13.8379 1.84078 14.7875 2.03325C15.7259 2.22346 16.2701 3.13795 16.0939 4.08057L15.0677 9.82971M7.96439 10.0432C6.072 11.8178 4.91115 12.8595 4.67339 13.7962C4.40846 14.84 4.18905 15.9851 6.0778 18.2819C6.69951 19.0379 7.22362 19.5625 7.34491 19.7626C7.55609 20.111 8.00331 20.3723 8.00331 22.0023M15.0836 9.84861C17.3452 10.4912 18.8165 11.7103 19.2379 12.5798C19.7074 13.5487 19.5747 15.0057 18.5899 17.4059C18.2014 18.3528 17.7253 18.8915 17.6468 19.112C17.4638 19.6257 17.1848 20.1789 17.3131 21.9783'
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

VictoryFingerIcon.displayName = 'VictoryFingerIcon';
export default VictoryFingerIcon;

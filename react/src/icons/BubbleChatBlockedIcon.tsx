import React from 'react';
import config from '../config';

interface BubbleChatBlockedIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BubbleChatBlockedIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bubble-chat-blocked)
 * @see {@link https://clicons.dev/icon/bubble-chat-blocked}
 */
const BubbleChatBlockedIcon = React.forwardRef<SVGSVGElement, BubbleChatBlockedIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 2L22 22'
    }
  ],
  [
    'path',
    {
      d: 'M7.58569 3.58569C8.90461 2.89234 10.4065 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 13.5935 21.1077 15.0954 20.4143 16.4143M5.28249 5.28249C3.56332 7.00165 2.5 9.37665 2.5 12C2.5 13.0483 2.6698 14.057 2.98341 15C3.5282 16.6382 3.12865 18.5818 2.6935 19.6074C2.59266 19.8451 2.62741 20.1274 2.80997 20.31C2.93024 20.4302 3.09774 20.4913 3.26592 20.4658C4.37462 20.2979 5.63177 19.362 7.5 20.3687C8.8394 21.0904 10.3719 21.5 12 21.5C14.6234 21.5 16.9984 20.4367 18.7175 18.7175'
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

BubbleChatBlockedIcon.displayName = 'BubbleChatBlockedIcon';
export default BubbleChatBlockedIcon;

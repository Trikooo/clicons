import React from 'react';
import config from '../config';

interface MessageMultiple2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MessageMultiple2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/message-multiple2)
 * @see {@link https://clicons.dev/icon/message-multiple2}
 */
const MessageMultiple2Icon = React.forwardRef<SVGSVGElement, MessageMultiple2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.79098 19C7.46464 18.8681 7.28441 18.8042 7.18359 18.8166C7.05968 18.8317 6.8799 18.9637 6.52034 19.2275C5.88637 19.6928 5.0877 20.027 3.90328 19.9983C3.30437 19.9838 3.00491 19.9765 2.87085 19.749C2.73679 19.5216 2.90376 19.2067 3.23769 18.5769C3.70083 17.7034 3.99427 16.7035 3.54963 15.9023C2.78384 14.7578 2.13336 13.4025 2.0383 11.9387C1.98723 11.1522 1.98723 10.3377 2.0383 9.55121C2.29929 5.53215 5.47105 2.33076 9.45292 2.06733C10.8086 1.97765 12.2269 1.97746 13.5854 2.06733C17.5503 2.32964 20.712 5.50498 20.9965 9.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.6976 21.6471C12.1878 21.4862 10.1886 19.5298 10.0241 17.0737C9.99195 16.593 9.99195 16.0953 10.0241 15.6146C10.1886 13.1585 12.1878 11.2021 14.6976 11.0411C15.5539 10.9862 16.4479 10.9863 17.3024 11.0411C19.8122 11.2021 21.8114 13.1585 21.9759 15.6146C22.008 16.0953 22.008 16.593 21.9759 17.0737C21.9159 17.9682 21.5059 18.7965 21.0233 19.4958C20.743 19.9854 20.928 20.5965 21.2199 21.1303C21.4304 21.5152 21.5356 21.7076 21.4511 21.8466C21.3666 21.9857 21.1778 21.9901 20.8003 21.999C20.0538 22.0165 19.5504 21.8123 19.1508 21.5279C18.9242 21.3667 18.8108 21.2861 18.7327 21.2768C18.6546 21.2675 18.5009 21.3286 18.1936 21.4507C17.9174 21.5605 17.5966 21.6283 17.3024 21.6471C16.4479 21.702 15.5539 21.7021 14.6976 21.6471Z'
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

MessageMultiple2Icon.displayName = 'MessageMultiple2Icon';
export default MessageMultiple2Icon;

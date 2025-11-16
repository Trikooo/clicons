import React from 'react';
import config from '../config';

interface ChatPreviewIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChatPreviewIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chat-preview)
 * @see {@link https://clicons.dev/icon/chat-preview}
 */
const ChatPreviewIcon = React.forwardRef<SVGSVGElement, ChatPreviewIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.0045 11H12.0135M8.00903 11H8.018'
    }
  ],
  [
    'path',
    {
      d: 'M21.9609 9C21.9865 9.72648 22 10.2302 22 11.001C22 11.7718 21.9865 12.5242 21.9609 13.2507C21.8772 15.6242 21.8353 16.8109 20.8699 17.7836C19.9046 18.7562 18.6843 18.8084 16.2437 18.9128C15.5098 18.9442 14.7498 18.9677 13.9693 18.9825C13.2282 18.9965 12.8576 19.0036 12.532 19.1276C12.2064 19.2516 11.9325 19.4865 11.3845 19.9563L9.20503 21.8252C9.07273 21.9386 8.90419 22.001 8.72991 22.001C8.32679 22.001 8 21.6742 8 21.2711V18.9229C7.91842 18.9196 7.83715 18.9163 7.75619 18.9128C5.31569 18.8084 4.09545 18.7562 3.13007 17.7836C2.16469 16.8109 2.12282 15.6242 2.03909 13.2507C2.01346 12.5242 2 11.7718 2 11.001C2 10.2302 2.01346 9.47779 2.03909 8.75131C2.12282 6.37784 2.16469 5.1911 3.13007 4.21846C4.09545 3.24582 5.3157 3.19361 7.7562 3.08919C8.48051 3.0582 9.2302 3.01483 10 3'
    }
  ],
  [
    'path',
    {
      d: 'M22 5C22 5 19.958 8 17 8C14.042 8 12 5 12 5C12 5 14 2 17 2C20 2 22 5 22 5Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.991 5H17'
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

ChatPreviewIcon.displayName = 'ChatPreviewIcon';
export default ChatPreviewIcon;
